import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import './DialogComponent.scss';

const DialogComponent = ({ open, onClose, children, classes = '', mod = '' }) => {
  return (
    <Dialog open={open} onClose={onClose} classes={{ root: `default_dialog_root ${classes}` }}>
      <div className={'dialog_wrapper ' + mod}>{children}</div>
    </Dialog>
  );
};

export default DialogComponent;
