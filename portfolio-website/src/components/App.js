import React from 'react'
import Alert from 'react-bootstrap/Alert'



 const App = () => {

    return (
        <div>

           <h1> S. Makai Takori</h1> 
            <br/>

            <Alert variant="success">
                This is a success alert—check it out!
            </Alert>



           <h1>About Makai</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br/>
           <h1>Projects</h1>
           <table>
               <tr>
                    <label>Image 1</label> <br/>
                    <label> Project title| Link</label>
                    <p>Project description</p>
                </tr>
                <tr>
                    <label>Image 2 </label><br/>
                    <label>Project title| Link</label>
                    <p>Project description</p>
                </tr>
                <tr>
                         <label>Image 3</label><br/>
                    <label>Project title| Link</label>
                    <p>Project description</p>
                </tr>
            </table>
            <br/>
           <h1>Blog</h1>
                <label>Read my latest blog here</label>
            <br/>
           <h1>Contact</h1>
                You can contact me at ...
                Or follow me on social media
            <br/>
        </div>
    )
}

export default App;