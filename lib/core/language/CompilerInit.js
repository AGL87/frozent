/**
*
* Copyright (c), all rights reserved Silicium World.
*   Frozent Package -> Atom Editor
* (c), 2019
*
**/
const fs = require('fs');

module.exports = class FrozentCompilerInit {

  constructor() {
    this.cCompiler = 'NotFound';
    this.cxxCompiler = 'NotFound';

    this.DetectCCompiler();
    this.DetectCxxCompiler();
  }

  DetectCCompiler() {
    console.log("Detect C Compiler");
    var rootProcess = '';
    /*
    * Detect usable compiler & linker
    */
    if (process.platform === 'win32' || process.platform === 'win64') {
      var msvc = 'NO';
      var cygwin = '';
      var mingw = '';

      /*
      * Detect MSVC path(s)
      */
      if (fs.existsSync(process.env.VS140COMNTOOLS)){
        msvc = process.env.VS140COMNTOOLS;
      }

      if (fs.existsSync('C:/cygwin64/bin')){
        cygwin = 'C:/cygwin64/bin';
      }else if (fs.existsSync('C:/cygwin/bin')){
        cygwin = 'C:/cygwin/bin';
      }

      if (fs.existsSync('C:/mingw/bin')){
        mingw = 'C:/mingw/bin';
      }

      atom.config.set('frozent.msvc', msvc);
      atom.config.set('frozent.cygwin', cygwin);
      atom.config.set('frozent.mingw', mingw);

    } else if (process.platform === 'darwin') {
      var xcode = '';
      var clang = '';
    }

  }

  DetectCxxCompiler() {
    console.log("Detect C++ Compiler");
  }

};
