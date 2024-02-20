import React, { useState, useEffect } from 'react';

function QualificationInfo() {

    const [qualifications, setQualifications] = useState([]);

    useEffect(() => {

        const fetchQualifications = async () => {

            try {

                const response = await fetch('https://2211cs010580.github.io/jsonfile/info.json');

                if (!response.ok) {
                    throw new Error('Failed to fetch qualifications');
                }

                const data = await response.json();

                setQualifications(data);

            } catch (error) {

                console.error('Error fetching Qualifications:', error);

            }

        };

        fetchQualifications();

    }, []);

    return (
        <div className='container-fluid'>
            <h3 style={{ textAlign: "center", backgroundColor:" lavender", color:" green" }}>Education </h3>
            <br />
            <ul>
                {qualifications.map((qualification, index) => (
                    <li key={index}>{qualification.qualification}</li>
                ))}
            </ul>
        </div>
    );
}

export default QualificationInfo;