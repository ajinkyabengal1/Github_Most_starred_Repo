import React from 'react';
import moment from 'moment';

export default function Card( props ) {

    const { avatar, title, description, stars, issues, userName, creationDate } = props;
    let timeInterval = creationDate.split( 'T' )[ 0 ];
    timeInterval = moment( creationDate, "YYYY-MM-DD" ).fromNow();

    return (
        <div className="repo-card col-15">
            <div className="row">
                <div className="avatar col-15 col-md-4 col-lg-3">
                    <img src={ avatar } alt="profile"/>
                </div>
                <div className="data col-15 col-md-8 col-lg-9">
                    <h3 className="repo-title"> { title } </h3>
                    <div className="repo-description"> { description } </div>
                    <div className="row">
                        <div className="repo-stats">
                            <div className="repo-stars">         
                            { 
                                stars !== 1 
                                ? `${ stars } Stars` 
                                : `${ stars } Star` 
                            } 
                            </div>
                            <div className="repo-issues"> 
                            { 
                                issues !== 1 
                                ? `${ issues } Issues` 
                                : `${ issues } Issue` 
                            } 
                            </div>
                            <div className="repo-owner">
                                -{ `${ timeInterval } by ${ userName }.` }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
