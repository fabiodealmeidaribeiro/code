<?php
    abstract class Animal {
        public $name;
        public $breed;
        public function __construct ($object) {
            $this->name = $object['name'];
            $this->breed = $object['breed'];
        }
    };
?>