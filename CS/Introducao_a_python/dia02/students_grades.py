recu_students = []

with open("students_grades.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recu_students.append(student_grade[0] + "\n")


with open("recu_students.txt", mode="w") as recu_students_file:
    print(recu_students)
    recu_students_file.writelines(recu_students)
