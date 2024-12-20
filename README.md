# MeeriAI: Biometric Identity Verification with AI

- Empowered by NVIDIA DeepStream SDK:MeeriAI is a state-of-the-art biometric identity verification system leveraging AI and NVIDIA DeepStream SDK for iris scanning. This solution ensures secure, efficient, and reliable user authentication through advanced AI capabilities.

## Table of Contents
- Introduction
- Features
- Setup Instructions
- SDK Integration Details
- Usage

### Introduction
- MeeriAI redefines identity verification by combining AI-powered iris scanning with NVIDIA's cutting-edge DeepStream SDK. This document provides setup instructions, SDK integration details, and troubleshooting steps to help developers implement and maintain the solution.

### Features
- Real-time biometric identity verification using AI.
- Powered by NVIDIA DeepStream SDK for high performance and scalability.
- Built with a focus on security, accuracy, and ease of use.
- Supports frontend integration with React.js for camera input and seamless UI.

### Setup Instructions

#### Prerequisites

- NVIDIA GPU with CUDA support.
- NVIDIA DeepStream SDK (latest version).
- Python 3.8+ for backend integration.
- Node.js and npm for React frontend.
- Docker (optional for containerized deployment).

#### Step 1: Clone the Repository

`git clone https://github.com/MeeriAI/MeeriAI.git`   
`cd MeeriAI `
 
#### Step 2: Install Dependencies

`cd backend`
`pip install -r requirements.txt`
 
`cd frontend`  
`npm install`
 
#### Step 3: Configure Environment

Create an `.env` file in the `backend` directory:

'DEEPSTREAM_PATH=/path/to/deepstream'  
'CAMERA_FEED_URL=http://localhost:3000/camera'  
'IRIS_MODEL_PATH=/path/to/model'
  
#### Step 4: Start Services

`cd backend ` 
`python app.py`

`cd frontend`  
`npm start`
  
## SDK Integration Details
- MeeriAI uses the NVIDIA DeepStream SDK for efficient processing of camera feeds and AI-based iris recognition.

## Key SDK Components Used:
1. GStreamer Pipelines: Handles video streams for real-time processing.
2.TensorRT: Accelerates deep learning inference.
3.Metadata Management: Manages detection and recognition data.

## Integration Workflow

1. Camera feed captured via GStreamer pipeline.
2. Iris detection and segmentation using TensorRT-accelerated models.
3. Metadata extraction and processing for identity verification.

## Usage

### Starting the Application

1. Open your browser and navigate to http://localhost:3000.
2. Click Start Camera to initialize the live feed.
3. Use the Start Iris Scan button for verification.

## API Endpoints

`/start_scan`
- Method: POST
- Description: Processes the iris scan and returns verification results.
