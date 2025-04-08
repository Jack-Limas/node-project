import { render, screen } from "@testing-library/react";
import FichaPersonal from "../components/FichaPersonal";

const mockPersona = {
  name: { first: "Juan", last: "Pérez" },
  email: "juan.perez@example.com",
  phone: "123456789",
  gender: "male",
  location: { country: "Colombia" },
  picture: { large: "https://randomuser.me/api/portraits/men/1.jpg" },
};

describe("FichaPersonal", () => {
  test("debería renderizar la información de la persona correctamente", () => {
    render(<FichaPersonal persona={mockPersona} />);

    // Título
    expect(screen.getByText(/ficha personal/i)).toBeInTheDocument();

    // Nombre completo
    expect(screen.getByText("Juan Pérez")).toBeInTheDocument();

    // Género
    expect(screen.getByText(/género:/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();

    // País
    expect(screen.getByText(/país:/i)).toBeInTheDocument();
    expect(screen.getByText(/colombia/i)).toBeInTheDocument();

    // Email
    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByText("juan.perez@example.com")).toBeInTheDocument();

    // Teléfono
    expect(screen.getByText(/teléfono:/i)).toBeInTheDocument();
    expect(screen.getByText("123456789")).toBeInTheDocument();

    // Imagen
    const image = screen.getByAltText(/foto de perfil/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockPersona.picture.large);
  });
});
