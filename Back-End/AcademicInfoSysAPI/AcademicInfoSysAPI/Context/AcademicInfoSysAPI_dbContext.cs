using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using AcademicInfoSysAPI.Context.Models;

namespace AcademicInfoSysAPI.Context
{
    public partial class AcademicInfoSysAPI_dbContext : DbContext
    {
        public AcademicInfoSysAPI_dbContext()
        {
        }

        public AcademicInfoSysAPI_dbContext(DbContextOptions<AcademicInfoSysAPI_dbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Contract> Contracts { get; set; }
        public virtual DbSet<GenericUser> GenericUsers { get; set; }
        public virtual DbSet<OptionalDiscipline> OptionalDisciplines { get; set; }
        public virtual DbSet<OptionalDisciplineList> OptionalDisciplineLists { get; set; }
        public virtual DbSet<OptionalGrade> OptionalGrades { get; set; }
        public virtual DbSet<StandardDiscipline> StandardDisciplines { get; set; }
        public virtual DbSet<StandardGrade> StandardGrades { get; set; }
        public virtual DbSet<Student> Students { get; set; }
        public virtual DbSet<Teacher> Teachers { get; set; }
        public virtual DbSet<Year2DisciplineList> Year2DisciplineLists { get; set; }
        public virtual DbSet<staff> staff { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Name=ConnectionStrings:DefaultConnection");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contract>(entity =>
            {
                entity.ToTable("Contract");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Description)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.Signed).HasColumnName("signed");

                entity.Property(e => e.StudId).HasColumnName("stud_ID");

                entity.HasOne(d => d.Stud)
                    .WithMany(p => p.Contracts)
                    .HasForeignKey(d => d.StudId)
                    .HasConstraintName("FK__Contract__stud_I__693CA210");
            });

            modelBuilder.Entity<GenericUser>(entity =>
            {
                entity.ToTable("GenericUser");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.Type)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("type");

                entity.Property(e => e.Username)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("username");
            });

            modelBuilder.Entity<OptionalDiscipline>(entity =>
            {
                entity.ToTable("OptionalDiscipline");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CoresopondingYear).HasColumnName("coresoponding_year");

                entity.Property(e => e.IsApproved).HasColumnName("isApproved");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.NoCredits).HasColumnName("no_credits");

                entity.Property(e => e.NoStudents).HasColumnName("noStudents");

                entity.Property(e => e.TeacherId).HasColumnName("teacher_ID");

                entity.HasOne(d => d.Teacher)
                    .WithMany(p => p.OptionalDisciplines)
                    .HasForeignKey(d => d.TeacherId)
                    .HasConstraintName("FK__OptionalD__teach__74AE54BC");

                entity.HasMany(d => d.Studs)
                    .WithMany(p => p.OptionalDisciplines)
                    .UsingEntity<Dictionary<string, object>>(
                        "FinalOptionalDisciplineList",
                        l => l.HasOne<Student>().WithMany().HasForeignKey("StudId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK__FinalOpti__stud___00200768"),
                        r => r.HasOne<OptionalDiscipline>().WithMany().HasForeignKey("OptionalDisciplineId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK__FinalOpti__optio__7F2BE32F"),
                        j =>
                        {
                            j.HasKey("OptionalDisciplineId", "StudId").HasName("PK__FinalOpt__AE4E6FCE19D71C13");

                            j.ToTable("FinalOptionalDisciplineList");

                            j.IndexerProperty<int>("OptionalDisciplineId").HasColumnName("optionalDiscipline_ID");

                            j.IndexerProperty<int>("StudId").HasColumnName("stud_ID");
                        });
            });

            modelBuilder.Entity<OptionalDisciplineList>(entity =>
            {
                entity.HasKey(e => new { e.OptionalDisciplineId, e.StudId })
                    .HasName("PK__Optional__AE4E6FCE88FFEE4D");

                entity.ToTable("OptionalDisciplineList");

                entity.Property(e => e.OptionalDisciplineId).HasColumnName("optionalDiscipline_ID");

                entity.Property(e => e.StudId).HasColumnName("stud_ID");

                entity.Property(e => e.Final).HasColumnName("final");

                entity.Property(e => e.OrderPreference).HasColumnName("orderPreference");

                entity.HasOne(d => d.OptionalDiscipline)
                    .WithMany(p => p.OptionalDisciplineLists)
                    .HasForeignKey(d => d.OptionalDisciplineId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__OptionalD__optio__7B5B524B");

                entity.HasOne(d => d.Stud)
                    .WithMany(p => p.OptionalDisciplineLists)
                    .HasForeignKey(d => d.StudId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__OptionalD__stud___7C4F7684");
            });

            modelBuilder.Entity<OptionalGrade>(entity =>
            {
                entity.HasKey(e => new { e.OptionalDisciplineId, e.StudId })
                    .HasName("PK__Optional__AE4E6FCE5F1555B8");

                entity.ToTable("OptionalGrade");

                entity.Property(e => e.OptionalDisciplineId).HasColumnName("optionalDiscipline_ID");

                entity.Property(e => e.StudId).HasColumnName("stud_ID");

                entity.Property(e => e.Value).HasColumnName("value");

                entity.HasOne(d => d.OptionalDiscipline)
                    .WithMany(p => p.OptionalGrades)
                    .HasForeignKey(d => d.OptionalDisciplineId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__OptionalG__optio__778AC167");

                entity.HasOne(d => d.Stud)
                    .WithMany(p => p.OptionalGrades)
                    .HasForeignKey(d => d.StudId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__OptionalG__stud___787EE5A0");
            });

            modelBuilder.Entity<StandardDiscipline>(entity =>
            {
                entity.ToTable("StandardDiscipline");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CorespondingYear).HasColumnName("coresponding_year");

                entity.Property(e => e.Description)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.NoCredits).HasColumnName("no_credits");

                entity.Property(e => e.TeacherId).HasColumnName("teacher_ID");

                entity.HasOne(d => d.Teacher)
                    .WithMany(p => p.StandardDisciplines)
                    .HasForeignKey(d => d.TeacherId)
                    .HasConstraintName("FK__StandardD__teach__01142BA1");
            });

            modelBuilder.Entity<StandardGrade>(entity =>
            {
                entity.HasKey(e => new { e.DisciplineId, e.StudId })
                    .HasName("PK__Standard__202E185486E3CC7A");

                entity.ToTable("StandardGrade");

                entity.Property(e => e.DisciplineId).HasColumnName("discipline_ID");

                entity.Property(e => e.StudId).HasColumnName("stud_ID");

                entity.Property(e => e.Value).HasColumnName("value");

                entity.HasOne(d => d.Discipline)
                    .WithMany(p => p.StandardGrades)
                    .HasForeignKey(d => d.DisciplineId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__StandardG__disci__70DDC3D8");

                entity.HasOne(d => d.Stud)
                    .WithMany(p => p.StandardGrades)
                    .HasForeignKey(d => d.StudId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__StandardG__stud___71D1E811");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasKey(e => e.StudId)
                    .HasName("PK__Student__EBAE406BE032BCED");

                entity.ToTable("Student");

                entity.Property(e => e.StudId).HasColumnName("stud_ID");

                entity.Property(e => e.Cnp)
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .HasColumnName("CNP");

                entity.Property(e => e.ContractId).HasColumnName("contract_ID");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.GenericId).HasColumnName("generic_ID");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OptionalDisciplineListId).HasColumnName("optionalDisciplineList_id");

                entity.Property(e => e.Year1).HasColumnName("year1");

                entity.Property(e => e.Year2).HasColumnName("year2");

                entity.HasOne(d => d.Generic)
                    .WithMany(p => p.Students)
                    .HasForeignKey(d => d.GenericId)
                    .HasConstraintName("FK__Student__generic__60A75C0F");
            });

            modelBuilder.Entity<Teacher>(entity =>
            {
                entity.ToTable("Teacher");

                entity.Property(e => e.TeacherId).HasColumnName("teacher_ID");

                entity.Property(e => e.Cnp)
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .HasColumnName("CNP");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.GenericId).HasColumnName("generic_ID");

                entity.Property(e => e.IsChief).HasColumnName("isChief");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Generic)
                    .WithMany(p => p.Teachers)
                    .HasForeignKey(d => d.GenericId)
                    .HasConstraintName("FK__Teacher__generic__66603565");
            });

            modelBuilder.Entity<Year2DisciplineList>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Year2DisciplineList");

                entity.Property(e => e.DisciplineId).HasColumnName("discipline_ID");

                entity.Property(e => e.StudId).HasColumnName("stud_ID");

                entity.HasOne(d => d.Discipline)
                    .WithMany()
                    .HasForeignKey(d => d.DisciplineId)
                    .HasConstraintName("FK__Year2Disc__disci__6E01572D");

                entity.HasOne(d => d.Stud)
                    .WithMany()
                    .HasForeignKey(d => d.StudId)
                    .HasConstraintName("FK__Year2Disc__stud___6D0D32F4");
            });

            modelBuilder.Entity<staff>(entity =>
            {
                entity.ToTable("Staff");

                entity.Property(e => e.StaffId).HasColumnName("staff_ID");

                entity.Property(e => e.Cnp)
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .HasColumnName("CNP");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.GenericId).HasColumnName("generic_ID");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Generic)
                    .WithMany(p => p.staff)
                    .HasForeignKey(d => d.GenericId)
                    .HasConstraintName("FK__Staff__generic_I__6383C8BA");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
