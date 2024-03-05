import '../App.css'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { useAuth0 } from "@auth0/auth0-react";

const Drawers = () => {

    const { user } = useAuth0();

    console.log(user);

    return (
        <Drawer variant="permanent"  >
            <List className='drawarer' disablePadding sx={{ bgcolor: '#101F33' }}>
                <div className='paddingDiv'>
                    <h1 className='text-color'>{user?.name}</h1>
                    <img className='lgPicture' src={user?.picture} alt="" />
                </div>
            </List>
        </Drawer>
    );
}

export default Drawers;