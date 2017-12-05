import Datastore from 'nedb'
import path from 'path'
import {remote} from 'electron'

const customersPath = path.join(remote.app.getPath('data'), 'customers.db')
const customersDS = new Datastore({filename: customersPath, autoload: true})
