using Microsoft.AspNetCore.Identity;

namespace backend.Domain.Data;

public class ApplicationUser : IdentityUser
{
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string Password { get; set; } = null!;
    public int Age { get; set; }
}