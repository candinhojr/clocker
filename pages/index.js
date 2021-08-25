import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";

import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

import { Logo } from "./../components";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Preenchimento obrigatório"),
  password: yup.string().required("Preenchimento obrigatório"),
  calendarName: yup.string().required("Preenchimento obrigatório"),
});

export default function Home() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    onSubmit: (values, form) => {
      console.log(values);
    },
    validationSchema,
    initialValues: {
      email: "",
      password: "",
      calendarName: "",
    },
  });

  return (
    <Container p={4} centerContent>
      <Image src={Logo} alt="application logo" />
      <Box>
        <Text p={4} mt={8}>
          Crie sua agenda compartilhada
        </Text>
      </Box>
      <Box>
        <FormControl id="email" p={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && (
            <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>
          )}
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && (
            <FormHelperText textColor="#e74c3c">
              {errors.password}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl id="calendarName" p={4} isRequired>
          <InputGroup>
            <InputLeftAddon>clocker.io/</InputLeftAddon>
            <Input
              type="username"
              value={values.calendarName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </InputGroup>
          {touched.calendarName && (
            <FormHelperText textColor="#e74c3c">
              {errors.calendarName}
            </FormHelperText>
          )}
        </FormControl>

        <Box p={4}>
          <Button
            colorScheme="blue"
            width="full"
            onClick={handleSubmit}
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
