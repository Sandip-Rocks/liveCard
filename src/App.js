import { CssBaseline, Grid}from '@material-ui/core'
import Header from './components/Header/Header';
import Map from './components/Content/Content'
import Sidebar from './components/Sidebar/Sidebar';

const App=()=>{
    return (
        <>
            <CssBaseline>
                <Header/>
                <Grid container spacing={5} style={{width:'100%'}}>
                <Grid item xs={12} md={4}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map/>
                </Grid>
                </Grid>
            </CssBaseline>
        </>
    )
}

export default App;