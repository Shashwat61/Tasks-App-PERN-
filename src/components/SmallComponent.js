// import Switch from '@material-ui/core/Switch';
import Switch from 'react-input-switch';

function SmallComponent({heading}) {
    return (
        <div className="componentcontainer ">
            <div className="componentdisplay">
                <span className="text-sm">{heading}</span>
                <Switch styles={{
    track: {
      backgroundColor: 'blue'
    },
    trackChecked: {
      backgroundColor: '#db2777'
    },
    button: {
      backgroundColor: 'yellow'
    },
    buttonChecked: {
      backgroundColor: 'white'
    }
  }}/>

            </div>
                     
        </div>
    )
}


export default SmallComponent
