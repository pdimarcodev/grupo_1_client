import React, { Fragment } from 'react';

function Login(){
    return(
        <Fragment>
        <aside className="col-sm-12 col-md-3 col-lg-3 mt-4 login">
      
        <br />
        { false && 
        <Fragment>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <a className="btn btn-primary" href="/user/profile" role="button" className="btn-login">Perfil</a>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <a className="btn btn-danger" href="/user/logout" role="button" className="btn-login">Cerrar Sesión</a>
          </div>
        </div>
        </Fragment>
        }

        <h3>Ingresar</h3>
          
          <div className="row">
            <div className="card signin">
              <div className="card-body">
          
                <form action="/user/login" method="POST">
                  <div className="col-12 form-group">
                    <label for="email" className="login-datos">Email</label>
                    <input type="email" className="form-control" name="email" />
                  </div>
                  <div className="col-12 form-group">
                    <label for="password"className="login-datos">Clave</label>
                    <input type="password" className="form-control" name="password" />
                  </div>
                    <div className="col-12 form-group">
                      <label>
                        <input type="checkbox" name="remember" />
                        Recordarme
                      </label>
                    </div>
                      <button type="submit" className="btn btn-primary" className="btn-login" >Ingresar</button>
                </form>
              </div>
            </div>
          </div>
          <div id="forgot">
            <a href="#" className="olvido">¿Olvidó su clave?</a>
          </div>
          <div className="registro text-center">
            <a className="btn btn-primary" href="/user/registro" role="button" className="btn-login">Registrarse</a>
          </div>
      
    </aside>

    </Fragment>
    )
}

export default Login;