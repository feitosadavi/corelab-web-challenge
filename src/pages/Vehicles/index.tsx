import React, { useState } from "react";

import { Button, Card, Search } from 'components/';

import styles from "./Vehicles.module.scss";
import { mockVehicles } from 'types/Vehicle.mock';
import { IVehicle } from 'types/';
import { getVehicles } from 'lib/api';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  React.useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      setVehicles(payload);
    };

    fetchVehicles();
  }, []);


  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <Search placeholder="Search" value={search} onChange={handleSearchChange} />

        <Button text="Add new vehicle" onClick={() => {}} />

        {vehicles.map(vehicle => (
          <Card key={vehicle.id} title="Sandero Stepway" vehicle={vehicle} />
        ))}
      </main>
    </div>
  );
};

export default VehiclesPage;
