import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';



const Button = (props) => {

   const { className, outline, children, onClick } = props;

   return (
      <div>
         <button onClick={onClick}
            className={classNames('button', className, {
               'button--outline': outline,
            })} >
            {children}
         </button>
      </div>
   );
}
Button.propTypes = {
   onClick: PropTypes.func,
};

export default Button;
