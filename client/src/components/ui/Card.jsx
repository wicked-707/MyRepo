import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ children, className = '', ...props }) => (
  <div
    className={`bg-white shadow-md rounded-lg overflow-hidden p-4 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`border-b pb-2 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-lg font-semibold text-gray-800 ${className}`} {...props}>
    {children}
  </h3>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`text-gray-600 ${className}`} {...props}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
