import React, { useState } from 'react';
import { FormControl, Stack, TextField, Button, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PostProfil from './PostProfil/PostProfil';
import ImageIcon from '@mui/icons-material/Image';
const PostForm = () => {
  const [images, setImages] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(newImages)
      .then(images => setImages(prevImages => [...prevImages, ...images]))
      .catch(error => console.error('Error uploading images:', error));
  };

  return (
    <div>
      <FormControl className="postFormContainer">
        <Stack>
          <PostProfil />
        </Stack>
        <Stack direction="column" className="FormContainer">
          <TextField
            id="outlined-textarea"
            placeholder="What is happening?!"
            multiline
            variant="standard"
            fullWidth
          />
          <Stack direction="row" flexWrap="wrap" mt={2}>
            {images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Upload ${index + 1}`}
                style={{ margin: '5px', maxHeight: '100px', maxWidth: '100px' }}
              />
            ))}
          </Stack>
          <Stack direction="row" alignItems="center">
            <IconButton component="label">
              <ImageIcon color='primary' />
              <input
                type="file"
                hidden
                multiple
                onChange={handleFileUpload}
              />
            </IconButton>
          </Stack>
        </Stack>
      </FormControl>
    </div>
  );
};

export default PostForm;
