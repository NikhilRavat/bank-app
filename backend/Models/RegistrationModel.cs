namespace backend.Models;

public class RegistrationModel
{
    public string FirstName { get; set; } = null!;
    public string Username { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string Password { get; set; } = null!;
    public int Age { get; set; }
    public string Email { get; set; } = null!;
}