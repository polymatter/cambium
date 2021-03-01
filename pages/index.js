import Head from 'next/head';
import Plateau from '../components/Plateau';
import RobotCommunication from '../components/RobotCommunication';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const clockwiseDirections = ['N', 'E', 'S', 'W'];
  const antiClockwiseDirections = [...clockwiseDirections].reverse();
  const directionMovement = [{ direction: 'N', row: -1, column: 0 }, { direction: 'E', row: 0, column: 1 }, { direction: 'S', row: 1, column: 0 }, { direction: 'W', row: 0, column: -1 }];

  const commandsReceived = () => {
    const commands = document.querySelector('#robotCommunication').value.trim();
    const initial = commands.slice(0, commands.indexOf('|') + 1).match(/[\d]+[\s|,.]/g)
    console.log(initial)
    let row = Number(initial[0].trim().replace('|', '').replace(',', ''));
    let column = Number(initial[1].trim().replace('|', '').replace(',', ''));
    let direction = commands.slice(0, commands.indexOf('|') + 1).match(/[a-zA-Z]/)[0].trim().replace('|', '').replace(',', '');
    console.log(`start at ${direction}`);
    const commandBody = commands.slice(commands.indexOf('|') + 1).trim().replace('|', '').replace(',', '');
    commandBody.split('').forEach(command => {
      if (command == 'R') {
        direction = clockwiseDirections[(clockwiseDirections.indexOf(direction) + 1) % clockwiseDirections.length];
      } else if (command == 'L') {
        direction = antiClockwiseDirections[(antiClockwiseDirections.indexOf(direction) + 1) % antiClockwiseDirections.length];
      } else if (command == 'M') {
        const move = directionMovement.find(i => i.direction == direction);
        row = Number(row) + Number(move.row);
        column = Number(column) + Number(move.column);
      }

    });

    setRobotLocation({ row, column, direction });
  }

  const [robotLocation, setRobotLocation] = useState({ row: 0, column: 0, direction: 'N' })

  const gridsize = { rows: 10, columns: 10 }

  return (
    <div className={styles.container}>
      <Head>
        <title>Mars Rover Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mars Rover Project
        </h1>

        Robot is at ({ robotLocation.row }, { robotLocation.column }) facing { robotLocation.direction }

        <Plateau rows={gridsize.rows} columns={gridsize.columns} robotLocation={robotLocation}></Plateau>

        <RobotCommunication commandsReceived={commandsReceived} width={gridsize.columns * 100}></RobotCommunication>
      </main>

      <footer className={styles.footer}>
        Created by Jeffrey Lake
      </footer>
    </div>
  );
}
