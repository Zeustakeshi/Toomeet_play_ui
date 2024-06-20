import * as z from "zod";
import moment from "moment";

export const usernameSchema = z
    .string({
        required_error: "Tên không được bỏ trống!",
    })
    .min(5, { message: "Tên người dùng phải có ít nhất 5 kí tự" })
    .max(50, "Tên người dùng không được vượt quá 50 kí tự");

export const emailSchema = z
    .string({
        required_error: "Email không được bỏ trống!",
    })
    .email({
        message: "Định dạng email không hợp lệ!",
    });

export const phoneSchema = z
    .string({
        required_error: "Số điện thoại không được bỏ trống",
    })
    .min(10, { message: "Số điện thoại không hợp lệ" })
    .max(14, "Số điện thoại không hợp lệ");

export const addressSchema = z
    .string({
        required_error: "Địa chỉ không được bỏ trống",
    })
    .min(5, "Địa chỉ không hợp lệ")
    .max(100, "Địa chỉ quá dài");

export const dateOfBirthSchema = z
    .date({ required_error: "Vui lòng chọn ngày sinh" })
    .refine(
        (data) => {
            return moment(data).get("year") > 16;
        },
        {
            message: "Tuổi phải lớn hơn 16",
        }
    );

export const genderSchema = z.enum(["MALE", "FEMALE", "OTHER"], {
    required_error: "Vui lòng chọn giới tính",
});

export const passwordSchema = z
    .string({
        required_error: "Mật khẩu không được bỏ trống",
    })
    .min(8, { message: "Mật khẩu phải có ít nhất 8 kí tự" });

export const createAccoutSchema = z
    .object({
        email: emailSchema,
        password: passwordSchema,
        confirmPassword: z.string({
            required_error: "Vui lòng nhập lại mật khẩu",
        }),
        name: usernameSchema,
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Mật khẩu không khớp",
        path: ["confirmPassword"],
    });

export const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});
export const otpSchema = z.object({
    otp: z
        .string({
            required_error: "Vui lòng nhập OTP.",
        })
        .length(6, { message: "OTP không hợp lệ!" }),
});

export type LoginType = z.infer<typeof loginSchema>;
export type RegisterType = z.infer<typeof createAccoutSchema>;
