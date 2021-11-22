import React from 'react';
import {
    BrowserRouter as Router,
    Routes, //antes era el Switch
    Route,
    Navigate
} from "react-router-dom";
//our component
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                {/* mostrar las rutas */}
                <Routes>
                    <Route path="/about" exact  element={ < AboutScreen />} />
                    <Route path="/login" exact element = { <LoginScreen/>} />

                    <Route path="/" exact element = { <HomeScreen/> } />
                    
                    <Route path="*" element={<Navigate to ="/" />}/>

                </Routes>
            </div>
        </Router>
    )
}
