import React from 'react';
import TableLine from './TableLine';
import contacts from '../contacts.json';

class ListDemo extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  addContactsHandler = () => {
    const randomElement = contacts[Math.floor(Math.random() * contacts.length)];
    const contactsCopy = this.state.contacts.concat(randomElement);

    this.setState({
      contacts: contactsCopy,
    });
  };

  sortByName = () => {
    const contactsCopy = this.state.contacts.sort((a, b) => {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    this.setState({
      contacts: contactsCopy,
    });
  };

  sortByPopularity = () => {
    const contactsCopy = this.state.contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      contacts: contactsCopy,
    });
  };

  deleteMovieHandler = (id) => {
    const contactsCopy = [...this.state.contacts];
    const contactToRemoveIndex = contactsCopy.findIndex(
      (item) => item.id === id
    );
    contactsCopy.splice(contactToRemoveIndex, 1);
    this.setState({
      contacts: contactsCopy,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addContactsHandler} className="btn btn-primary">
          Add Contact
        </button>
        <button onClick={this.sortByName} className="btn btn-dark">
          Sort by Name
        </button>
        <button onClick={this.sortByPopularity} className="btn btn-success">
          Sort by Popularity
        </button>
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <TableLine
                  {...contact}
                  clickToDelete={() => this.deleteMovieHandler(contact.id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListDemo;
