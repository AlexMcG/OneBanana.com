/**
 * 
 */
package com.onebanana.model;

import com.onebanana.dao.LoginDAO;

/**
 * @author hsangh
 *
 */
public class LoginModel {

	/**
	 * 
	 */
	public LoginModel() {
		// TODO Auto-generated constructor stub
	}

	public boolean checkLogin(String uname, String password) {
		LoginDAO objLoginDao = new LoginDAO();
		
		return objLoginDao.checkLogin(uname, password);
	}

}
