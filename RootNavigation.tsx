import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name:String, params) {
  navigationRef.current?.navigate(name, params);
}
