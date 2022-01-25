import React from 'react';

const NewNinjaForm = () => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input type="number" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Ninja a Veteran?</label>
                    <input type="checkbox" name="" id="" className="form-checkbox" />
                </div>
                <input type="submit" value="Create Ninja!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default NewNinjaForm;