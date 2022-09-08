import { Button, Card, Grid, TextField, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import './Style.css'
import Nav from './Nav';
const text = [
  {
    value: '0',
    label: 'H',
  },
  {
    value: '1',
    label: 'T',
  },
  {
    value: '3',
    label: 'H',
  }
];

const HeadTails = () => {
  const [opt, setOpt] = useState("");
  const [error, setError] = useState("")
  const [value, setValue] = useState("")

  const handleChange = (event) => {
    setOpt(event.target.value);
  };

  const handleClick = () => {
    if (opt != 1 || opt != 2 || opt != 3) {
      setError("Please select value from Dropdown")
    }
    if ((opt == 1 || opt == 2 || opt == 3)) {
      setError(" Submitted")
    }
    setOpt('')
  }
  const handleOptionClick = (val) => {
    setValue(val)
  }
  // useEffect(() => {
  //   localStorage.setOpt('list', opt)
  // }, [opt])
  return (
    <>
      <Nav />
      <Grid container xs={12} lg={12} sm={12}>
        <Card className="card">
          <Grid xs={4}>

          </Grid>
          <Grid xs >
            <TextField
              select
              fullWidth
              className="select"
              value={opt}
              onChange={handleChange}
              label="select option"
            >

              {text.map((option) => (
                <MenuItem key={option.value} value={option.value} onClick={() => handleOptionClick(option.label)}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid xs={4}>

          </Grid>
          {error && <span className={error == " Submitted" ? "text-success" : "text-danger"}>{error}</span>}
          <div>
            <Button variant="contained" color="primary" className="button" onClick={() => handleClick()}>Submit</Button>
          </div>
          {value && <h1 style={{ marginTop: '20px' }}>{value}</h1>}
        </Card>
      </Grid>
    </>
  )
}
export default HeadTails;