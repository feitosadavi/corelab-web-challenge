import React, { useEffect, useState } from "react";

import { Button, Card, Search } from 'components/';
import { getVehicles } from 'lib/api';
import { IVehicle } from "types/Vehicle";

import styles from "./Vehicles.module.scss";
import { mockVehicles } from 'types/Vehicle.mock';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      setVehicles(payload);
    };

    fetchVehicles();
  }, []);

  console.log({ vehicles });

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <Search placeholder="Search" value={search} onChange={handleSearchChange} />

        <Button text="Add new vehicle" onClick={() => {}} />

        <Card title="Sandero Stepway" vehicle={mockVehicles()[0]} />
      </main>
    </div>
  );
};

export default VehiclesPage;
