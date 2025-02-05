import { megaEncrypt, megaDecrypt, megaVerify } from './crypto/index.mjs'
import Storage from './storage.mjs'
import MutableFile from './mutable-file.mjs'
import File from './file.mjs'
import API from './api.mjs'
import MutableFile from './mutable-file.mjs'

// just for backyards compatibility: is better requiring
// File and Storage directly as built sizes will be smaller

function mega (options, cb) {
  return new Storage(options, cb)
}

mega.Storage = Storage
mega.File = File
mega.MutableFile = MutableFile
mega.API = API
mega.file = File.fromURL
mega.encrypt = megaEncrypt
mega.decrypt = megaDecrypt
mega.verify = megaVerify

module.exports = mega
