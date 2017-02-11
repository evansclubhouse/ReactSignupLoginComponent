import React from 'react';

const localStyles = {
  wrapper: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    transform: 'rotateY(0deg)',
    width: '100%',
  },
  inputWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 344,
    height: 40,
    margin: '15px 0',
  },
  recoverPasswordWrapper: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recoverPassword: {
    textAlign: 'center',
    cursor: 'pointer',
    margin: '20px 0',
    padding: 15,
  },
  button: {
    margin: '0 15px',
    padding: 15,
  },
};

const Login = ({ handleShowSignup, handleShowRecover, styles }) => (
  <section id="login-form" style={Object.assign(localStyles.wrapper, styles.wrapper )}>
    <div id="fields" style={Object.assign(localStyles.inputWrapper, styles.inputWrapper)}>
      <input
        style={Object.assign(localStyles.input, styles.input)}
        type="text"
        id="username"
        name="username"placeholder="Username"
      />
      <input
        style={Object.assign(localStyles.input, styles.input)}
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
    </div>
    <div style={Object.assign(localStyles.buttonsWrapper, styles.buttonsWrapper)}>
      <div style={Object.assign(localStyles.recoverPasswordWrapper, styles.recoverPasswordWrapper)}>
        <button
          id="recorver-password"
          style={Object.assign(localStyles.recoverPassword, styles.recoverPasswordButton)}
          onClick={() => { handleShowRecover('isRecoveringPassword', true); }}
        >Recover Password</button>
      </div>
      <button
        id="signup-button"
        style={Object.assign(localStyles.button, styles.button)}
        onClick={() => { handleShowSignup('isLogin', false); }}
      >Signup</button>
      <input type="submit" value="Login" style={Object.assign(localStyles.button, styles.button)} />
    </div>
  </section>
);

Login.propTypes = {
  handleShowSignup: React.PropTypes.func.isRequired,
  handleShowRecover: React.PropTypes.func.isRequired,
  styles: React.PropTypes.shape({
    wrapper: React.PropTypes.object,
    inputWrapper: React.PropTypes.object,
    buttonsWrapper: React.PropTypes.object,
    input: React.PropTypes.object,
    recoverPasswordWrapper: React.PropTypes.object,
    recoverPasswordButton: React.PropTypes.object,
    button: React.PropTypes.object,
  }),
};

Login.defaultProps = {
  styles: {},
};

export default Login;
