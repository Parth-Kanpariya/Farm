import { View,Text,StyleSheet } from 'react-native';
import React from 'react';

import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

const Google=()=>
{
    return(
        <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        // onPress={this._signIn}
        disabled={this.state.isSigninInProgress} />
    )
}

export default Google;


