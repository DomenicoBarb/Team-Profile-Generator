// Require the inquirer package for prompting user input in the command line
const inquirer = require("inquirer");
// Require the fs (file system) package for interacting with the file system
const fs = require("fs");
// Require the path package for working with file paths
const path = require("path");

// Require the Manager class from the Manager module in the lib directory
const Manager = require("./lib/Manager");
// Require the Engineer class from the Engineer module in the lib directory
const Engineer = require("./lib/Engineer");
// Require the Intern class from the Intern module in the lib directory
const Intern = require("./lib/Intern");