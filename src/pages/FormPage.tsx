// src/pages/FormPage.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Container, TextField, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

console.log(">>> FormPage loaded!");

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(9, "Must be at least 9 digits").max(11, "Must be at most 11 digits"),
});

type FormData = z.infer<typeof schema>;

const FormPage: React.FC = () => {
  console.log(">>> FormPage rendered!");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert(`Form submitted:\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Form Page
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Surname"
            {...register("surname")}
            error={!!errors.surname}
            helperText={errors.surname?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Paper>
      <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </Container>
  );
};

export default FormPage;
