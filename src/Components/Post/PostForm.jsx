import React, { useState } from 'react';
import { FormControl, Stack, TextField, Button, IconButton } from '@mui/material';
import PostProfil from './PostProfil/PostProfil';
import ImageIcon from '@mui/icons-material/Image';
import Picker from 'emoji-picker-react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Circle from '../Cercle';
const PostForm = () => {
  const [images, setImages] = useState([]);
  const [textField, setTextField] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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

  const handleChange = (e) => {
    setTextField(e.target.value);
  };

  const onEmojiClick = (event) => {
    console.log(event.emoji)
    setTextField(prevText => prevText + event.emoji);
  };

  const circumference = textField.length * 10;
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
            value={textField}
            onChange={handleChange}
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

            <IconButton color='primary' onClick={() => setShowEmojiPicker(val => !val)}>
              <SentimentSatisfiedAltIcon color='primary' />
            </IconButton>
            {showEmojiPicker && (
              <div style={{ position: 'absolute', zIndex: 1,top:"10vh" }}>
                <Picker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </Stack>
          <Circle circumference={circumference} />
        </Stack>
      </FormControl>
    </div>
  );
};

export default PostForm;
