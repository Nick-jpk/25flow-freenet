import React from 'react';

const VPNFiles = () => {
    const vpnFiles = [
        { name: 'VPN Configuration 1', link: '/files/vpn1.zip' },
        { name: 'VPN Configuration 2', link: '/files/vpn2.zip' },
        // Add more VPN files as needed
    ];

    return (
        <section>
            <h2>Available VPN Files</h2>
            <ul>
                {vpnFiles.map((file, index) => (
                    <li key={index}>
                        <a href={file.link} download>{file.name}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default VPNFiles;
