import { Educacion } from "./educacion.model";
import { Proyecto } from "./proyecto.model";
import { Experiencia } from "./experiencia.model";
import { UsuarioHabilidad } from "./usuariohabilidad.model";
import { RedesUsuario } from "./redes.model";

export class Usuario{
    id?:number;
    nombre?:string;
    apellido?:string;
    username?:string;
    email?:string;
    contrasena?:string;
    descripcion?:string;
    perfilProfesional?:string;
    fotoPerfil?:string;
    usuarioHabilidad?:UsuarioHabilidad;
    educacions?:Educacion;
    proyectos?:Proyecto;
    experienciaLaborals?:Experiencia;
    redesUsuario?:RedesUsuario;
    constructor(){}
}