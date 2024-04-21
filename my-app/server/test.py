import requests

# URL of the Flask API endpoint
url = 'http://127.0.0.1:5000/process-image'

# Path to the image file you want to send for processing
file_path = 'image.jpeg'

# Open the image file in binary mode
with open(file_path, 'rb') as img:
    file_dict = {'image': img}

    # Send a POST request with the image file
    response = requests.post(url, files=file_dict)

    # Print the JSON response from the server
    print(response.json())
