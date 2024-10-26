const Component =({
    name,
    email,
    phoneNo,
    address,
    gender,
    married,
    city,
    handleChange,
    handleSubmit,
}) => {
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={handleChange}/>
            </div>
            <div>
                <label>Email :</label>
                <input type="email" name="email" value={email} onChange={handleChange}/>
            </div>
            <div>
                <label>Phone No. :</label>
                <input type="tel" name="phoneNo" value={phoneNo} onChange={handleChange}/>
            </div>
            <div>
                <label>Address: </label>
                <input type="text" name="address" value={address} onChange={handleChange}/>
            </div>
            <div>
                <label>Gender: </label>
                <select name="gender" value={gender} onChange={handleChange}>
                    <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label>Married :</label>
                <input type="checkbox" name="married" value={married} onChange={handleChange}/>
            </div>
            <div>
                <label>City :</label>
                <input type="text" name="city" value={city} onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Component;