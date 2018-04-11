const multer = require('multer');
const path   = require('path');
const fs     = require('fs');

class ResumeUpload {
  constructor(multer, config) {
    this.fileLimits = {
      fileSize: '5MB'
    };
    this.multer = multer;
    this.config = config;
  }

  
}
