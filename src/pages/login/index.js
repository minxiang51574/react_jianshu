import React, { PureComponent } from "react"
import { actionCreators }  from "./store"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent{
    render(){
        	const { loginStatus } = this.props;
		if (!loginStatus) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' ref={(input) => {this.account = input}}/>
						<Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
						<Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to='/'/>
		}
      
    }
}

const mapStateToProps = (state)=>({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)