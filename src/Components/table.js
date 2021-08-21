import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import './table.css'
const Tables = () => {

    const [urlDataHeader, setUrlDataHeader] = useState(
        [
            {
                update: "Update",
                remove: "Remove from list",
                date: "Adding date",
                status: "Status",
                url: "url"
            }
        ]
    )

    const [appDataHeader, setAppDataHeader] = useState(
        [
            {
                update: "Update",
                remove: "Remove",
                date: "Adding date",
                status: "Status",
                app: "App"
            }
        ]
    )


    const [statusUpdate, setStatusUpdate] = useState(true)
    const [DataUrl, setDataUrl] = useState(
        [
            {
                update: statusUpdate,
                remove: "delete",
                date: "11:09:43 24/05/2021",
                status: "blocked",
                url: "youtube.com"
            },
            {
                update: statusUpdate,
                remove: "delete",
                date: "11:09:49 24/05/2021",
                status: "open",
                url: "aaa.co.il"
            },
            {
                update: statusUpdate,
                remove: "delete",
                date: "11:10:01 24/05/2021",
                status: "open",
                url: "yosef.com"
            },
        ]
    )
    const [urlData, setUrlData] = useState([...DataUrl])
    const [DataApp, setDataApp] = useState(
        [
            {
                update: statusUpdate,
                remove: "delete",
                date: "9:32 24/05/2021",
                status: "blocked",
                app: "Waze"
            },
            {
                update: statusUpdate,
                remove: "delete",
                date: "10:52 24/05/2021",
                status: "open",
                app: "facebook"
            },
            {
                update: statusUpdate,
                remove: "delete",
                date: "11:32 24/05/2021",
                status: "open",
                app: "Instegram"
            },
        ]

    )
    const [appData, setAppData] = useState([...DataApp])

    const deleteUrl = (i) => {
        setUrlData(urlData.filter((url, index) => index != i))
    }
    const deleteApp = (i) => {
        setAppData(appData.filter((app, index) => index != i))
    }

    const UpdateUrl = (e, i) => {
        setStatusUpdate(!statusUpdate)
        urlData[i].update = !(urlData[i].update)
        if (urlData[i].update == true) {

            e.target.className = "header-blue-update"
        }
        else if (urlData[i].update == false) {

            e.target.className = "header-red-update"
        }

    }
    const UpdateApp = (e, i) => {
        setStatusUpdate(!statusUpdate)
        appData[i].update = !(appData[i].update)
        if (appData[i].update == true) {

            e.target.className = "header-blue-update"
        }
        else if (appData[i].update == false) {

            e.target.className = "header-red-update"
        }

    }


    return (
        <>
            <Container>

                {/* Url Table */}

                <h4 className="url-header-name">URL</h4>
                <Table className="url-table" striped responsive >
                    <thead>
                        {urlDataHeader.map((urlheader, index) => {
                            return (
                                <tr key={index} className="url-table-header">
                                    <td className="header-green" >{urlheader.update}</td>
                                    <th className="header-red">{urlheader.remove}</th>
                                    <th className="header-green">{urlheader.date}</th>
                                    <th className="header-green">{urlheader.status}</th>
                                    <th className="header-green">{urlheader.url}</th>
                                </tr>
                            )
                        })}

                    </thead>
                    <tbody  >
                        {urlData.map((urldata, index) => {
                            return (
                                <tr className="t-row" key={index}>
                                    <td onClick={(e) => UpdateUrl(e, index)} className="header-blue-update">{urldata.update ? "Open" : "Close"} </td>
                                    <td className="header-blue-remove" onClick={() => deleteUrl(index)}>{urldata.remove}</td>
                                    <td className="header-green">{urldata.date}</td>
                                    <td className="header-green">{urldata.status}</td>
                                    <td className="header-green">{urldata.url}</td>
                                </tr>
                            )
                        })}



                    </tbody>
                </Table>

                {/* Application Table */}


                <h4 className="app-header-name">APPLICATIONS</h4>
                <Table className="application-table" bordered responsive >
                    <thead>
                        {appDataHeader.map((appheader, index) => {
                            return (
                                <tr key={index} className="application-table-header">
                                    <td className="header-blue" >{appheader.update}</td>
                                    <td className="header-blue" >{appheader.remove}</td>
                                    <td className="header-blue" >{appheader.date}</td>
                                    <td className="header-blue" >{appheader.status}</td>
                                    <td className="header-blue" >{appheader.app}</td>
                                </tr>
                            )
                        })}

                    </thead>
                    <tbody  >
                        {appData.map((appdata, index) => {
                            return (
                                <tr key={index}>
                                    <td onClick={(e) => UpdateApp(e, index)} className="header-blue-update" >{appdata.update ? "Open" : "Close"}</td>
                                    <td onClick={() => deleteApp(index)} className="header-blue-remove"  >{appdata.remove}</td>
                                    <td className="header-blue" >{appdata.date}</td>
                                    <td className="header-green" >{appdata.status}</td>
                                    <td className="header-blue" >{appdata.app}</td>
                                </tr>
                            )
                        })}



                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default Tables;