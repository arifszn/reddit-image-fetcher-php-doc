import React, { useEffect, useState } from 'react';
import './Result.scss';
import RedditImageFetcher from 'reddit-image-fetcher';
import JSONTree from 'react-json-tree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Result = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (props.data) {
            setData(props.data);
        } else {
            RedditImageFetcher.fetch()
            .then(result => {
                console.log(result);
                setData(result);
            }).catch(err => {
                alert('Error on getting example data')
            });
        }
    }, [])

    return (
        <div className="card result-component-wrapper shadow-dim">
            <div className="card__body">
                <div className="json-viewer__body">
                    {   data.length ?
                        <JSONTree 
                            getItemString={(type, data, itemType, itemString)  => <span></span>}
                            data={data} 
                            hideRoot={false}
                            invertTheme={false}
                            shouldExpandNode={() => true}
                            keyPath={['result']}
                        />
                        :
                        <span className="fetching-now">Fetching <FontAwesomeIcon icon={faSpinner} spin/></span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Result;