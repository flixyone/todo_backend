PGDMP               	        }            todo_app    17.2    17.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16388    todo_app    DATABASE     ~   CREATE DATABASE todo_app WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE todo_app;
                     postgres    false            �            1259    16431    task    TABLE     �   CREATE TABLE public.task (
    id integer NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    completed boolean DEFAULT false NOT NULL
);
    DROP TABLE public.task;
       public         heap r       postgres    false            �            1259    16430    task_id_seq    SEQUENCE     �   CREATE SEQUENCE public.task_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.task_id_seq;
       public               postgres    false    218            �           0    0    task_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.task_id_seq OWNED BY public.task.id;
          public               postgres    false    217            !           2604    16434    task id    DEFAULT     b   ALTER TABLE ONLY public.task ALTER COLUMN id SET DEFAULT nextval('public.task_id_seq'::regclass);
 6   ALTER TABLE public.task ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            �          0    16431    task 
   TABLE DATA           A   COPY public.task (id, title, description, completed) FROM stdin;
    public               postgres    false    218   �
       �           0    0    task_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.task_id_seq', 16, true);
          public               postgres    false    217            $           2606    16439 #   task PK_fb213f79ee45060ba925ecd576e 
   CONSTRAINT     c   ALTER TABLE ONLY public.task
    ADD CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.task DROP CONSTRAINT "PK_fb213f79ee45060ba925ecd576e";
       public                 postgres    false    218            �   o   x�U˻
AF�:y�ya��Z
��6��Ff�$���6��N���դ#�H��(3�z���Н�N�x���PS�,��f깊=]d`�a*���-��=�˚�o�6����)7     