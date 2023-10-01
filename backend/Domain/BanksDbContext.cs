using backend.Domain.Data;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace backend.Domain;

public class BanksDbContext : IdentityDbContext<ApplicationUser>
{
    public BanksDbContext(DbContextOptions<BanksDbContext> options) : base(options)
    { }
    public DbSet<Bank> Banks { get; set; }
}