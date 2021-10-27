import React from 'react';
import VolunteerRegListMenu from '../VolunteerRegistationListMenu/VolunteerRegList';
import VolunteerRegList from '../VolunteerRegList/VolunteerRegList';

const AdminHomePage = () => {
    return (
        <div>
            <div className="row w-100">
                <div className="col-md-3">
                    <VolunteerRegListMenu/>
                </div>
                <div className="col-md-9">
                    <VolunteerRegList />
                </div>
            </div>
        </div>
    );
};

export default AdminHomePage;