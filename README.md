# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `ProgressBarValue Component`

We use this component when we know the resource has a short charge time.
The props it recieves are `time`, `complete` , `type`, `color` and `size`.

`Time`: waiting time until counting begins. Must be a number and it´s represented in milliseconds. Default 1000ms
`Complete`: it represents the total value to be loaded. Must be a number. `Is Required.`
`Type`: value type. Must be a String. Default `%`
`Color`: Must be a String. Default `green`.
  `Allowed Values`: "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
`Size`: Must be a String. Default lg. Allowed Values `sm` ,`md`,`lg` and `xs`

Ex:
```
import ProgressBarValue from ‘../../components/Progress/ProgressBarValue’;

import {Box } from ‘@chakra-ui/react’;

const TestProgress = () => {

return (
<Box
>
<ProgressBarValue 
	time={2000} 
	complete={100} 
	type=’%’ 
  colorScheme='orange'
  size='md'
/> 
</Box>

}
export default TestProgress
```
Ideas for its application:

- It can use a primitive state (useState) to handle the component start and end.
- It can use a setTimeout to display the component for a specified time.
	

### `ProgressBarUndefined Component`

We use this component when we don´t know the resource´s charge time.
The props it recieves are `color` and `size`.
`Color`: Must be a String. Default `green`.
  `Allowed Values`: "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram".

`Size`: Must be a String. Default lg. Allowed Values `sm` ,`md`,`lg` and `xs`.
It has a unlimited animation and doesn´t simulate a charge with percentage. 

Ex:
```
<ProgressBarUndefined />
```
It´s applied in the same way that the component ProgressBarValue:

Ex:
```
import React, {useState} from ‘react’;
import ProgressBarUndefined from ‘../../components/Progress/ProgressBarUndefined’;

import {Box } from ‘@chakra-ui’;

const TestProgressUndefined = ({color, size}) => {

return (
<Box>
	<ProgressBarUndefined 
    color={color}
    size={size}
  /> 
</Box>

}
export default TestProgressUndefined
```

Ideas for its application:
- It can use a primitive state (useState) to handle the component start and end.
- It can use a setTimeout to display the component for a specified time.

### `ProgressBarUpload Component`

We use this component when we want to know the charge percentage in real time.
The props it recieves are `url`, `color` and `size`.
`Url`: testing default https://jsonplaceholder.typicode.com/albums/1/photos.
`Color`: Must be a String. Default green`.
  `Allowed Values`: "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram".
`Size`: Must be a String. Default lg. `Allowed Values` `sm` ,`md`,`lg` and `xs`.

The response shows error, but it tests the charge gets done anyway.

The component has a stylishless type file input.  It makes a request to the API to upload the image when it's selected from the computer.

### `external libraries`

* From the **react-content-loader** library a skeleton loader is shown while the page is loading.

  The Skeleton component can receive the following props,
  type: where I can choose between the following options (Card, Table, CheckBox, Text, Image, Dost, or default),
  and others to customize the previous ones that are (speed
  width
  height
  viewBox
  backgroundColor
  foregroundColor)

* From **chakra UI** library we are using a spinner when content is still loading.

  It's using two colors from our pallete, those colors are #9AE6B4 and #3182CE.
  You may see the official documentation [here](https://chakra-ui.com/docs/feedback/spinner).






