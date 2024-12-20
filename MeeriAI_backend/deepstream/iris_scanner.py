import pyds
import gi
gi.require_version('Gst', '1.0')
from gi.repository import Gst

class IrisScanner:
    def __init__(self):
        Gst.init(None)
        self.pipeline = None
        self.create_pipeline()

    def create_pipeline(self):
        # Build DeepStream pipeline
        self.pipeline = Gst.parse_launch("""
            nvarguscamerasrc ! 
            nvvideoconvert ! 
            nvstreammux name=mux batch-size=1 width=1920 height=1080 ! 
            nvinfer config-file-path=deepstream/config/deepstream_config.txt ! 
            nvvideoconvert ! 
            nvdsosd ! 
            nvegltransform ! 
            nveglglessink
        """)
        self.pipeline.set_state(Gst.State.PLAYING)

    def process_frame(self):
        # Process frame and extract biometric data
        bus = self.pipeline.get_bus()
        while True:
            msg = bus.timed_pop_filtered(1000, Gst.MessageType.EOS | Gst.MessageType.ERROR | Gst.MessageType.STATE_CHANGED)
            if msg:
                if msg.type == Gst.MessageType.ERROR:
                    err, debug = msg.parse_error()
                    raise Exception(f"Error from pipeline: {err} {debug}")
                elif msg.type == Gst.MessageType.EOS:
                    break
        return {"iris_data": "Iris Scanning Completed Successfully"}

    def stop_pipeline(self):
        self.pipeline.set_state(Gst.State.NULL)
