import  React, { Component } from 'react';
import LocationDetails from './LocationDetails';


class FilterLocations extends Component {
    state = {
        showDetails: false,
        selectedLocation: {}
    }

    componentDidMount() {

    }

    onListItemClick = (location) => {
        this.setState({ selectedLocation : location , showDetails : true })
    }

    onNewSearch = () => {
        this.setState({ showDetails: false })
    }

    render() {

        return(
            <div className="list-locations">
            
                <input 
                    className="search-locations"
                    type="text"
                    placeholder="Filter Locations..."
                    value={this.props.query}
                    onChange={(e) => this.props.onUpdateQuery(e.target.value)}
                    onClick={this.onNewSearch}/>
            
            <div className="location-list container">
                <ol className="location-list">
                {this.props.locations.map((location) => (
                    <li key={location.name} className="location-list-item" location={location} onClick={() => this.onListItemClick(location)}>
                    {location.name}</li>
            ))}
        </ol>
        </div>
                {this.state.showDetails && (
                   <LocationDetails selectedLocation = {this.state.selectedLocation}/>
                )}
        </div>
        )
    }
}

export default FilterLocations