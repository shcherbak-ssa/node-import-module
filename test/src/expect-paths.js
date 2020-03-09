'use strict';

const {createExpectFilePath} = require('./utils');

const EXPECT_APP_CONFIG_FILE_PATH = createExpectFilePath('app');
const EXPECT_USER_CONFIG_FILE_PATH = createExpectFilePath('user');
const EXPECT_PROJECT_CONFIG_FILE_PATH = createExpectFilePath('project');
const EXPECT_PRODUCT_CONFIG_FILE_PATH = createExpectFilePath('product');

module.exports = {
  EXPECT_APP_CONFIG_FILE_PATH,
  EXPECT_USER_CONFIG_FILE_PATH,
  EXPECT_PROJECT_CONFIG_FILE_PATH,
  EXPECT_PRODUCT_CONFIG_FILE_PATH
};