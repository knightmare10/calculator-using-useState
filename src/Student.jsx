

function Student(){
    return(
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/>

            <label htmlFor="number">Number:</label>
            <input type="text" id="number" name="number" required/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <input type="submit" value="Register"/>
        </div>
    );
}

export default Student;